import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Gamepad2, Film, Dumbbell, Dog } from 'lucide-react';

type InterestId = 'pong' | 'movies' | 'fitness' | 'pet';

interface InterestItem {
  id: InterestId;
  prefix?: string;
  label: string;
  action: string;
  tag?: string;
  helper: string;
  icon: React.ReactNode;
}

const toHashTag = (value: string) => {
  return value
    .trim()
    .split(/\s+/)
    .map((word) => {
      const cleaned = word.replace(/[^a-zA-Z0-9]/g, '');
      if (!cleaned) return '';
      return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
    })
    .filter(Boolean)
    .join('');
};

const INTERESTS: InterestItem[] = [
  {
    id: 'pong',
    label: 'videogames',
    action: 'Play pong',
    tag: 'PlayPong',
    helper: 'Real-time interaction with keyboard or touch.',
    icon: <Gamepad2 className="h-4 w-4" />
  },
  {
    id: 'movies',
    label: 'movies & TV',
    action: 'Mood tracker',
    tag: 'TryMoodTracker',
    helper: 'Quick survey to match your mood with a recommendation.',
    icon: <Film className="h-4 w-4" />
  },
  {
    id: 'fitness',
    label: 'fitness',
    action: 'Create workout',
    tag: 'CreateAWorkoutNow',
    helper: 'Simple inputs, practical output.',
    icon: <Dumbbell className="h-4 w-4" />
  },
  {
    id: 'pet',
    prefix: 'I have',
    label: 'two dogs',
    action: 'Play Tamagotchi',
    tag: 'PlayTamagotchi',
    helper: 'A quiet, retro-inspired companion.',
    icon: <Dog className="h-4 w-4" />
  }
];

type Mood = 'calm' | 'happy' | 'stressed' | 'tired';
type Session = 'moment' | 'single' | 'night' | 'weekend';
type Vibe = 'comfort' | 'light' | 'thoughtful' | 'intense' | 'action' | 'animated' | 'horror';
type Format = 'movie' | 'series';

interface Recommendation {
  mood: Mood;
  session: Session;
  vibe: Vibe;
  format: Format;
  title: string;
  year: number;
  runtimeMinutes?: number;
  seasons?: number;
  episodes?: number;
  summary: string;
  reason: string;
  genres: string[];
  posterUrl: string;
}

const SESSION_LABELS: Record<Session, string> = {
  moment: 'Quick escape',
  single: 'One sitting',
  night: 'All night',
  weekend: 'Weekend dive'
};

const VIBE_LABELS: Record<Vibe, string> = {
  comfort: 'I like it',
  light: 'Light',
  thoughtful: 'Thoughtful',
  intense: 'Intense',
  action: 'Action',
  animated: 'Animated',
  horror: 'Horror'
};

const RECOMMENDATIONS: Recommendation[] = [
  {
    mood: 'calm',
    session: 'single',
    vibe: 'light',
    format: 'movie',
    title: 'The Grand Budapest Hotel',
    year: 2014,
    runtimeMinutes: 100,
    summary: 'A whimsical concierge and his protege are swept into a theft, a family fortune, and a rapidly changing Europe.',
    reason: 'stylized, playful, and easy to sink into',
    genres: ['Comedy', 'Adventure'],
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a6/The_Grand_Budapest_Hotel_Poster.jpg'
  },
  {
    mood: 'calm',
    session: 'night',
    vibe: 'thoughtful',
    format: 'movie',
    title: 'Her',
    year: 2013,
    runtimeMinutes: 126,
    summary: 'In a near-future Los Angeles, a lonely writer falls in love with a sophisticated AI operating system.',
    reason: 'quiet, reflective, and emotionally grounded',
    genres: ['Drama', 'Romance', 'Sci-Fi'],
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg'
  },
  {
    mood: 'happy',
    session: 'night',
    vibe: 'animated',
    format: 'movie',
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    runtimeMinutes: 117,
    summary: 'Teenager Miles Morales becomes Spider-Man and joins other Spider-heroes to stop a multiverse threat.',
    reason: 'energizing, inventive, and packed with momentum',
    genres: ['Animation', 'Action'],
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/5/52/Spider-Man_Into_the_Spider-Verse_%282018_poster%29.png'
  },
  {
    mood: 'stressed',
    session: 'night',
    vibe: 'action',
    format: 'movie',
    title: 'Mad Max: Fury Road',
    year: 2015,
    runtimeMinutes: 120,
    summary: 'In a post-apocalyptic wasteland, Max and Furiosa flee a tyrant across the desert.',
    reason: 'relentless pacing and pure adrenaline',
    genres: ['Action', 'Adventure'],
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg'
  },
  {
    mood: 'tired',
    session: 'night',
    vibe: 'horror',
    format: 'movie',
    title: 'Get Out',
    year: 2017,
    runtimeMinutes: 104,
    summary: 'A Black man visiting his girlfriend\'s family uncovers a disturbing secret beneath their hospitality.',
    reason: 'tense, clever, and unforgettable',
    genres: ['Horror', 'Thriller'],
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Get_Out_poster.png'
  },
  {
    mood: 'stressed',
    session: 'weekend',
    vibe: 'comfort',
    format: 'series',
    title: 'Ted Lasso',
    year: 2020,
    seasons: 3,
    episodes: 34,
    summary: 'An American football coach leads an English soccer club with optimism, empathy, and humor.',
    reason: 'warm, uplifting, and low-pressure',
    genres: ['Comedy', 'Sports'],
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Ted_Lasso_season_1_poster.jpeg'
  },
  {
    mood: 'calm',
    session: 'night',
    vibe: 'thoughtful',
    format: 'series',
    title: 'The Queen\'s Gambit',
    year: 2020,
    seasons: 1,
    episodes: 7,
    summary: 'A gifted chess prodigy rises through the ranks while struggling with addiction and isolation.',
    reason: 'precise, elegant, and character-driven',
    genres: ['Drama'],
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b6/The_Queen%27s_Gambit_(miniseries).png'
  },
  {
    mood: 'stressed',
    session: 'night',
    vibe: 'intense',
    format: 'series',
    title: 'Chernobyl',
    year: 2019,
    seasons: 1,
    episodes: 5,
    summary: 'A dramatization of the 1986 nuclear disaster and the people who worked to contain it.',
    reason: 'focused, urgent, and deeply immersive',
    genres: ['Drama', 'History'],
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Chernobyl_2019_Miniseries.jpg'
  },
  {
    mood: 'happy',
    session: 'weekend',
    vibe: 'animated',
    format: 'series',
    title: 'Avatar: The Last Airbender',
    year: 2005,
    seasons: 3,
    episodes: 61,
    summary: 'Aang, the last Airbender, must master all elements to end a war and restore balance.',
    reason: 'adventurous, heartfelt, and easy to binge',
    genres: ['Animation', 'Adventure'],
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Avatar_The_Last_Airbender_logo.svg'
  }
];

const MoodTracker: React.FC = () => {
  const [mood, setMood] = useState<Mood>('calm');
  const [session, setSession] = useState<Session>('moment');
  const [vibe, setVibe] = useState<Vibe>('light');
  const [format, setFormat] = useState<Format>('movie');
  const [result, setResult] = useState<Recommendation | null>(null);

  const buildRecommendation = () => {
    const match = RECOMMENDATIONS.find(
      (item) => item.mood === mood && item.session === session && item.vibe === vibe && item.format === format
    ) ?? RECOMMENDATIONS.find(
      (item) => item.mood === mood && item.vibe === vibe && item.format === format
    ) ?? RECOMMENDATIONS.find(
      (item) => item.mood === mood && item.vibe === vibe
    ) ?? RECOMMENDATIONS.find(
      (item) => item.mood === mood && item.format === format
    ) ?? RECOMMENDATIONS.find((item) => item.mood === mood)
    ?? RECOMMENDATIONS[0];

    setResult(match);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Mood
          <select
            value={mood}
            onChange={(event) => setMood(event.target.value)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100 select-field"
          >
            <option value="calm">Calm</option>
            <option value="happy">Happy</option>
            <option value="stressed">Stressed</option>
            <option value="tired">Tired</option>
          </select>
        </label>
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Session
          <select
            value={session}
            onChange={(event) => setSession(event.target.value as Session)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100 select-field"
          >
            <option value="moment">{SESSION_LABELS.moment}</option>
            <option value="single">{SESSION_LABELS.single}</option>
            <option value="night">{SESSION_LABELS.night}</option>
            <option value="weekend">{SESSION_LABELS.weekend}</option>
          </select>
        </label>
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Vibe
          <select
            value={vibe}
            onChange={(event) => setVibe(event.target.value as Vibe)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100 select-field"
          >
            <option value="comfort">{VIBE_LABELS.comfort}</option>
            <option value="light">{VIBE_LABELS.light}</option>
            <option value="thoughtful">{VIBE_LABELS.thoughtful}</option>
            <option value="intense">{VIBE_LABELS.intense}</option>
            <option value="action">{VIBE_LABELS.action}</option>
            <option value="animated">{VIBE_LABELS.animated}</option>
            <option value="horror">{VIBE_LABELS.horror}</option>
          </select>
        </label>
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Format
          <select
            value={format}
            onChange={(event) => setFormat(event.target.value as Format)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100 select-field"
          >
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </label>
      </div>

      <div className="flex w-full justify-stretch md:justify-end">
        <button
          type="button"
          onClick={buildRecommendation}
          className="glow-reactive glow-button btn-primary inline-flex w-full items-center justify-center rounded-sm px-6 py-3 font-semibold transition-colors md:w-auto"
        >
          Get recommendation
        </button>
      </div>

      {result ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm text-zinc-300">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
            <span>{result.format}</span>
            <span>{SESSION_LABELS[result.session]}</span>
          </div>
          <div className="mt-4 space-y-3">
            <div>
              <div className="text-lg font-semibold text-zinc-100">{result.title}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-zinc-500">
                {result.format === 'movie'
                  ? `${result.runtimeMinutes} min | ${result.year}`
                  : `${result.seasons} seasons | ${result.episodes} eps | ${result.year}`}
              </div>
            </div>
            <p className="text-sm text-zinc-400">{result.summary}</p>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
              <span>{result.genres.join(' | ')}</span>
            </div>
            <p className="text-sm text-zinc-400">
              Suggested because it&apos;s {result.reason}.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const FitnessPlan: React.FC = () => {
  const [goal, setGoal] = useState('strength');
  const [availability, setAvailability] = useState('3');
  const [level, setLevel] = useState('intermediate');
  const [intent, setIntent] = useState('maintain');
  const [height, setHeight] = useState('175');
  const [weight, setWeight] = useState('70');
  const [sex, setSex] = useState('male');
  const [plan, setPlan] = useState<{
    summary: string;
    calories: number;
    days: { day: string; focus: string }[];
  } | null>(null);

  const buildPlan = useMemo(() => {
    const days = Number(availability);
    const heightCm = Math.max(120, Math.min(220, Number(height) || 175));
    const weightKg = Math.max(40, Math.min(180, Number(weight) || 70));
    const age = 30;
    const bmr = sex === 'female'
      ? 10 * weightKg + 6.25 * heightCm - 5 * age - 161
      : 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    const activity = days <= 2 ? 1.35 : days <= 4 ? 1.5 : 1.65;
    const maintenance = Math.round(bmr * activity);
    const calorieDelta = intent === 'lose' ? -350 : intent === 'gain' ? 300 : intent === 'bulk' ? 450 : 0;
    const calories = Math.max(1400, maintenance + calorieDelta);

    const strengthSplit = [
      'Lower body strength (squat, hinge, core)',
      'Upper body push (press, triceps, core)',
      'Lower body pull (deadlift, posterior chain)',
      'Upper body pull (rows, back, biceps)',
      'Full body accessories + conditioning'
    ];
    const enduranceSplit = [
      'Steady-state cardio + mobility',
      'Intervals + core',
      'Zone 2 cardio + mobility',
      'Tempo run or ride + core',
      'Long easy session + stretching'
    ];
    const hybridSplit = [
      'Full body strength + short finisher',
      'Intervals + mobility',
      'Upper body strength + core',
      'Zone 2 cardio + mobility',
      'Lower body strength + carries'
    ];

    const focusList = goal === 'endurance'
      ? enduranceSplit
      : goal === 'hybrid'
        ? hybridSplit
        : strengthSplit;

    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const planDays: { day: string; focus: string }[] = [];
    let workIndex = 0;
    const restTargets = 7 - days;
    const restSlots = restTargets > 0 ? [2, 5, 6].slice(0, restTargets) : [];

    weekDays.forEach((day, index) => {
      if (restSlots.includes(index)) {
        planDays.push({ day, focus: 'Rest + light mobility' });
      } else {
        planDays.push({
          day,
          focus: focusList[workIndex % focusList.length]
        });
        workIndex += 1;
      }
    });

    const summary = goal === 'endurance'
      ? 'Cardio-led week with mobility every day.'
      : goal === 'hybrid'
        ? 'Balanced strength + conditioning with recovery slots.'
        : 'Strength focus with progressive overload and recovery.';

    return { summary, calories, days: planDays };
  }, [availability, goal, height, intent, sex, weight]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Goal
          <select
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100 select-field"
          >
            <option value="strength">Strength</option>
            <option value="endurance">Endurance</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </label>
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Intent
          <select
            value={intent}
            onChange={(event) => setIntent(event.target.value)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100 select-field"
          >
            <option value="maintain">Maintain</option>
            <option value="lose">Lose weight</option>
            <option value="gain">Gain weight</option>
            <option value="bulk">Increase muscle mass</option>
          </select>
        </label>
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Availability
          <select
            value={availability}
            onChange={(event) => setAvailability(event.target.value)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100 select-field"
          >
            <option value="2">2 days / week</option>
            <option value="3">3 days / week</option>
            <option value="4">4 days / week</option>
            <option value="5">5 days / week</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Experience
          <select
            value={level}
            onChange={(event) => setLevel(event.target.value)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100 select-field"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </label>
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Height (cm)
          <input
            type="number"
            min="120"
            max="220"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100"
          />
        </label>
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Weight (kg)
          <input
            type="number"
            min="40"
            max="180"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100"
          />
        </label>
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Sex
          <select
            value={sex}
            onChange={(event) => setSex(event.target.value)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100 select-field"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>

      <div className="flex w-full justify-stretch md:justify-end">
        <button
          type="button"
          onClick={() => setPlan(buildPlan)}
          className="glow-reactive glow-button btn-primary inline-flex w-full items-center justify-center rounded-sm px-6 py-3 font-semibold transition-colors md:w-auto"
        >
          Generate plan
        </button>
      </div>

      {plan ? (
        <div className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm text-zinc-300">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
            <span>{plan.summary}</span>
            <span>Calories/day: {plan.calories}</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {plan.days.map((day) => (
              <div key={day.day} className="rounded-lg border border-zinc-800/70 bg-zinc-950/40 px-4 py-3">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">{day.day}</div>
                <div className="mt-2 text-sm text-zinc-200">{day.focus}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <p className="text-xs text-zinc-500">
        Informational only. Always adapt training and nutrition to your needs and consult professionals when necessary.
      </p>
    </div>
  );
};

type PetMood = 'Calm' | 'Happy' | 'Tired' | 'Hungry' | 'Sad';

interface TamagotchiState {
  hunger: number;
  happiness: number;
  energy: number;
  mood: PetMood;
  createdAt: number;
  lastUpdated: number;
  alive: boolean;
  criticalSince: number | null;
  lastAction: {
    feed: number;
    play: number;
    pet: number;
  };
}

const PET_STORAGE_KEY = 'portfolio.tamagotchi';

const clampStat = (value: number) => Math.max(0, Math.min(100, value));

const deriveMood = (state: Pick<TamagotchiState, 'hunger' | 'happiness' | 'energy' | 'alive'>): PetMood => {
  if (!state.alive) return 'Sad';
  if (state.hunger >= 75) return 'Hungry';
  if (state.energy <= 25) return 'Tired';
  if (state.happiness >= 70 && state.hunger < 50 && state.energy > 40) return 'Happy';
  if (state.happiness <= 35) return 'Sad';
  return 'Calm';
};

const createFreshPet = (): TamagotchiState => {
  const now = Date.now();
  const base = {
    hunger: 28,
    happiness: 72,
    energy: 68,
    mood: 'Calm' as PetMood,
    createdAt: now,
    lastUpdated: now,
    alive: true,
    criticalSince: null,
    lastAction: {
      feed: 0,
      play: 0,
      pet: 0
    }
  };
  return { ...base, mood: deriveMood(base) };
};

const loadPetState = (): TamagotchiState => {
  if (typeof window === 'undefined') return createFreshPet();
  const stored = window.localStorage.getItem(PET_STORAGE_KEY);
  if (!stored) return createFreshPet();
  try {
    const parsed = JSON.parse(stored) as TamagotchiState;
    return {
      ...createFreshPet(),
      ...parsed
    };
  } catch (error) {
    return createFreshPet();
  }
};

const savePetState = (state: TamagotchiState) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(PET_STORAGE_KEY, JSON.stringify(state));
};

const applyTimeDecay = (state: TamagotchiState, now: number): TamagotchiState => {
  if (!state.alive) {
    return { ...state, lastUpdated: now };
  }

  const elapsedMinutes = Math.max(0, (now - state.lastUpdated) / 60000);
  if (elapsedMinutes <= 0.01) {
    return state;
  }

  // Slightly faster decay to make the experience feel responsive in short sessions.
  const hungerIncrease = 3.4 * elapsedMinutes;
  const energyDecrease = 2.4 * elapsedMinutes;
  const baseHappinessDecrease = 1.0 * elapsedMinutes;

  let hunger = clampStat(state.hunger + hungerIncrease);
  let energy = clampStat(state.energy - energyDecrease);
  let happiness = clampStat(state.happiness - baseHappinessDecrease);

  if (hunger >= 70) {
    happiness = clampStat(happiness - 1.6 * elapsedMinutes);
  }
  if (energy <= 30) {
    happiness = clampStat(happiness - 1.4 * elapsedMinutes);
  }

  const inCritical = hunger >= 92 || energy <= 8;
  const criticalSince = inCritical ? (state.criticalSince ?? now) : null;
  const criticalDuration = inCritical && criticalSince ? now - criticalSince : 0;
  const alive = criticalDuration < 1000 * 60 * 45;

  const next = {
    ...state,
    hunger,
    energy,
    happiness,
    alive,
    criticalSince,
    lastUpdated: now
  };

  return { ...next, mood: deriveMood(next) };
};

const applyAction = (
  state: TamagotchiState,
  action: 'feed' | 'play' | 'pet'
): TamagotchiState => {
  if (!state.alive) return state;
  const now = Date.now();
  const elapsedSinceAction = Math.max(0, (now - state.lastAction[action]) / 1000);
  const cooldown = action === 'pet' ? 6 : 10;
  const softness = Math.min(1, elapsedSinceAction / cooldown);
  const diminishing = 0.6 + 0.4 * softness;

  let hunger = state.hunger;
  let energy = state.energy;
  let happiness = state.happiness;

  if (action === 'feed') {
    hunger = clampStat(hunger - 24 * diminishing);
    happiness = clampStat(happiness + 7 * diminishing);
  }
  if (action === 'play') {
    happiness = clampStat(happiness + 18 * diminishing);
    energy = clampStat(energy - 14 * diminishing);
    hunger = clampStat(hunger + 6 * (1 - diminishing));
  }
  if (action === 'pet') {
    happiness = clampStat(happiness + 10 * diminishing);
  }

  const next = {
    ...state,
    hunger,
    energy,
    happiness,
    lastAction: {
      ...state.lastAction,
      [action]: now
    },
    lastUpdated: now
  };

  return { ...next, mood: deriveMood(next) };
};

const formatAge = (createdAt: number) => {
  const minutes = Math.max(0, Math.floor((Date.now() - createdAt) / 60000));
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return `${hours}h ${remainder}m`;
};

const PET_SPRITES: Record<PetMood, string[]> = {
  Happy: [
    '00111100',
    '01111110',
    '11011011',
    '11111111',
    '11100111',
    '01111110',
    '00111100',
    '00000000'
  ],
  Calm: [
    '00111100',
    '01111110',
    '11011011',
    '11111111',
    '11111111',
    '01100110',
    '00111100',
    '00000000'
  ],
  Tired: [
    '00111100',
    '01111110',
    '11000011',
    '11111111',
    '11111111',
    '01111110',
    '00111100',
    '00000000'
  ],
  Hungry: [
    '00111100',
    '01111110',
    '11011011',
    '11111111',
    '11111111',
    '01100110',
    '00100100',
    '00000000'
  ],
  Sad: [
    '00111100',
    '01111110',
    '11011011',
    '11111111',
    '11111111',
    '01100110',
    '00111100',
    '00011000'
  ]
};

const DEAD_SPRITE = [
  '10000001',
  '01000010',
  '00100100',
  '00011000',
  '00011000',
  '00100100',
  '01000010',
  '10000001'
];

const getPetSprite = (mood: PetMood, alive: boolean) => {
  return alive ? PET_SPRITES[mood] : DEAD_SPRITE;
};

const TamagotchiPet: React.FC = () => {
  const [pet, setPet] = useState<TamagotchiState>(() => loadPetState());
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const now = Date.now();
    setPet((current) => applyTimeDecay(current, now));
    const timer = window.setInterval(() => {
      const tickNow = Date.now();
      setPet((current) => applyTimeDecay(current, tickNow));
    }, 20000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    savePetState(pet);
  }, [pet]);

  const handleAction = (action: 'feed' | 'play' | 'pet') => {
    setPet((current) => applyAction(current, action));
  };

  const sprite = getPetSprite(pet.mood, pet.alive);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <span>Mood</span>
          <span>Age</span>
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-4 text-lg font-semibold text-zinc-100">
          <span>{pet.mood}</span>
          <span>{formatAge(pet.createdAt)}</span>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 shadow-[inset_0_0_0_1px_rgba(148,163,127,0.08)]">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full border border-zinc-700" />
              <span className="h-2 w-2 rounded-full border border-zinc-700" />
              <span className="h-2 w-2 rounded-full border border-zinc-700" />
            </span>
            <span>Pet</span>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <div className="rounded-xl border border-[#2d3526] bg-gradient-to-br from-[#1a2218] via-[#0f1410] to-[#0b0f0b] p-5 shadow-[inset_0_0_20px_rgba(148,163,127,0.12)]">
              <div className="grid grid-cols-8 gap-[2px]">
                {sprite.map((row, rowIndex) =>
                  row.split('').map((pixel, colIndex) => (
                    <span
                      key={`${rowIndex}-${colIndex}`}
                      className="h-2.5 w-2.5 md:h-3 md:w-3"
                      style={{
                        backgroundColor: pixel === '1' ? 'rgba(148, 163, 127, 0.9)' : 'transparent'
                      }}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500">
            <span>Hunger {Math.round(pet.hunger)}%</span>
            <span>Energy {Math.round(pet.energy)}%</span>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-zinc-500">
              <span>Hunger</span>
              <span>{Math.round(pet.hunger)}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-zinc-800">
              <div className="h-full rounded-full bg-zinc-500" style={{ width: `${pet.hunger}%` }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-zinc-500">
              <span>Happiness</span>
              <span>{Math.round(pet.happiness)}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-zinc-800">
              <div className="h-full rounded-full bg-zinc-400" style={{ width: `${pet.happiness}%` }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-zinc-500">
              <span>Energy</span>
              <span>{Math.round(pet.energy)}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-zinc-800">
              <div className="h-full rounded-full bg-zinc-300" style={{ width: `${pet.energy}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button
          type="button"
          onClick={() => handleAction('feed')}
          className="glow-reactive glow-button w-full rounded-md border border-zinc-700 bg-zinc-950/70 px-3 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900/70 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={!pet.alive}
        >
          Feed
        </button>
        <button
          type="button"
          onClick={() => handleAction('play')}
          className="glow-reactive glow-button w-full rounded-md border border-zinc-700 bg-zinc-950/70 px-3 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900/70 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={!pet.alive}
        >
          Play
        </button>
        <button
          type="button"
          onClick={() => handleAction('pet')}
          className="glow-reactive glow-button w-full rounded-md border border-zinc-700 bg-zinc-950/70 px-3 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900/70 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={!pet.alive}
        >
          Pet
        </button>
      </div>

      <div className="flex items-center justify-start">
        <button
          type="button"
          onClick={() => setShowHelp((value) => !value)}
          className="text-xs font-mono uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-200"
        >
          {showHelp ? 'Hide tips' : 'How to play'}
        </button>
      </div>

      {showHelp ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm text-zinc-300">
          <ul className="list-disc space-y-2 pl-4 text-zinc-400">
            <li>Keep hunger low and energy above 30%.</li>
            <li>Feed reduces hunger. Play boosts happiness but drains energy.</li>
            <li>Pet gives a quick mood lift with no penalty.</li>
            <li>Check in for a minute or two — it’s designed for quick sessions.</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

const PongGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const keys = useRef({ up: false, down: false });
  const player = useRef({ y: 0, h: 90 });
  const ai = useRef({ y: 0, h: 90 });
  const ball = useRef({ x: 0, y: 0, vx: 180, vy: 150, size: 8 }); // pixels per second
  const speedScale = useRef(1);
  const lastTime = useRef(0);
  const isDragging = useRef(false);
  const dragOffsetY = useRef(0);
  const [score, setScore] = useState({ player: 0, ai: 0 });
  const isMobile = useRef(false);

  useEffect(() => {
    // Detect mobile device
    isMobile.current = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      || window.matchMedia('(max-width: 768px)').matches;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const resize = () => {
      const width = Math.min(container.clientWidth, 720);
      const height = Math.max(240, Math.round(width * 0.52));
      canvas.width = width;
      canvas.height = height;
      player.current.y = height / 2 - player.current.h / 2;
      ai.current.y = height / 2 - ai.current.h / 2;
      ball.current.x = width / 2;
      ball.current.y = height / 2;
    };

    resize();
    window.addEventListener('resize', resize);

    const resetBall = (direction: number) => {
      ball.current.x = canvas.width / 2;
      ball.current.y = canvas.height / 2;
      ball.current.vx = 180 * direction;
      ball.current.vy = (Math.random() * 60 + 120) * (Math.random() > 0.5 ? 1 : -1);
      speedScale.current = 1;
    };

    const draw = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const bg = theme === 'light' ? '#f6f5f2' : '#0b0b0b';
      const line = theme === 'light' ? '#d1d5db' : '#27272a';
      const text = theme === 'light' ? '#111827' : '#f2efe9';

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = line;
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 8]);
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = line;
      ctx.fillRect(20, player.current.y, 8, player.current.h);
      ctx.fillRect(canvas.width - 28, ai.current.y, 8, ai.current.h);

      ctx.beginPath();
      ctx.fillStyle = text;
      ctx.arc(ball.current.x, ball.current.y, ball.current.size, 0, Math.PI * 2);
      ctx.fill();
    };

    let rafId = 0;
    let lastBoost = 0;
    const step = (timestamp: number) => {
      // Calculate delta time in seconds, cap at 50ms to prevent huge jumps
      const deltaTime = lastTime.current ? Math.min((timestamp - lastTime.current) / 1000, 0.05) : 0.016;
      lastTime.current = timestamp;

      const { width, height } = canvas;
      if (!lastBoost) {
        lastBoost = timestamp;
      }
      if (timestamp - lastBoost >= 10000) {
        speedScale.current = Math.min(speedScale.current + 0.05, 1.6);
        lastBoost = timestamp;
      }

      // Keyboard movement (only when not dragging)
      if (!isDragging.current) {
        const moveSpeed = 360; // pixels per second
        if (keys.current.up) {
          player.current.y -= moveSpeed * deltaTime;
        }
        if (keys.current.down) {
          player.current.y += moveSpeed * deltaTime;
        }
      }
      player.current.y = Math.max(0, Math.min(height - player.current.h, player.current.y));

      // AI movement
      const aiSpeed = isMobile.current ? 2.5 : 3.5; // Slower AI on mobile
      ai.current.y += (ball.current.y - (ai.current.y + ai.current.h / 2)) * aiSpeed * deltaTime;
      ai.current.y = Math.max(0, Math.min(height - ai.current.h, ai.current.y));

      // Ball movement with delta time
      const mobileSpeedMultiplier = isMobile.current ? 0.7 : 1; // Slower ball on mobile
      ball.current.x += ball.current.vx * speedScale.current * deltaTime * mobileSpeedMultiplier;
      ball.current.y += ball.current.vy * speedScale.current * deltaTime * mobileSpeedMultiplier;

      if (ball.current.y <= ball.current.size || ball.current.y >= height - ball.current.size) {
        ball.current.vy *= -1;
      }

      const hitPlayer = ball.current.x - ball.current.size <= 28 &&
        ball.current.y >= player.current.y &&
        ball.current.y <= player.current.y + player.current.h;
      const hitAi = ball.current.x + ball.current.size >= width - 28 &&
        ball.current.y >= ai.current.y &&
        ball.current.y <= ai.current.y + ai.current.h;

      if (hitPlayer) {
        ball.current.vx = Math.abs(ball.current.vx) + 10;
      }
      if (hitAi) {
        ball.current.vx = -Math.abs(ball.current.vx) - 10;
      }

      if (ball.current.x < 0) {
        setScore((value) => ({ ...value, ai: value.ai + 1 }));
        resetBall(1);
      }
      if (ball.current.x > width) {
        setScore((value) => ({ ...value, player: value.player + 1 }));
        resetBall(-1);
      }

      draw();
      rafId = window.requestAnimationFrame(step);
    };

    rafId = window.requestAnimationFrame(step);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent, isDown: boolean) => {
      if (event.key === 'ArrowUp' || event.key === 'w') {
        keys.current.up = isDown;
      }
      if (event.key === 'ArrowDown' || event.key === 's') {
        keys.current.down = isDown;
      }
    };
    const onKeyDown = (event: KeyboardEvent) => handleKey(event, true);
    const onKeyUp = (event: KeyboardEvent) => handleKey(event, false);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  // Touch/pointer handlers for dragging the paddle
  const getPointerY = (event: React.PointerEvent | PointerEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return 0;
    const rect = canvas.getBoundingClientRect();
    return event.clientY - rect.top;
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const relativeY = event.clientY - rect.top;
    const relativeX = event.clientX - rect.left;

    // Check if touch is on or near the paddle (left side of canvas, within paddle area)
    const paddleX = 20;
    const touchAreaWidth = 60; // Generous touch area for easier grabbing

    if (relativeX <= paddleX + touchAreaWidth) {
      // Check if touch is near the paddle vertically
      const paddleTop = player.current.y;
      const paddleBottom = player.current.y + player.current.h;
      const touchBuffer = 30; // Extra area above/below paddle

      if (relativeY >= paddleTop - touchBuffer && relativeY <= paddleBottom + touchBuffer) {
        isDragging.current = true;
        dragOffsetY.current = relativeY - player.current.y - player.current.h / 2;
        event.preventDefault();
      }
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (isDragging.current) {
      const relativeY = getPointerY(event);
      const newY = relativeY - dragOffsetY.current - player.current.h / 2;
      player.current.y = Math.max(0, Math.min(canvas.height - player.current.h, newY));
      event.preventDefault();
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500">
        <span>Player {score.player}</span>
        <span>AI {score.ai}</span>
      </div>
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3 touch-none"
        style={{ touchAction: 'none' }}
      >
        <canvas ref={canvasRef} className="block w-full rounded-lg" />
      </div>
      <p className="text-xs text-zinc-500">
        Use Arrow Up/Down or W/S. Touch and drag to move the paddle on mobile.
      </p>
    </div>
  );
};

const InterestModal: React.FC<{
  interest: InterestItem;
  onClose: () => void;
}> = ({ interest, onClose }) => {
  const prefix = interest.prefix ?? 'I like';
  const tag = interest.tag ?? toHashTag(interest.action);
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 text-zinc-100 shadow-2xl md:max-h-[90vh]"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-zinc-500">
              {interest.icon}
              <span>{interest.label}</span>
            </div>
            <h3 className="text-2xl font-semibold font-mono tracking-wide">
              #{tag} {prefix} {interest.label}
            </h3>
            <p className="text-sm text-zinc-400">{interest.helper}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="glow-reactive glow-button flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-colors hover:text-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6">
          {interest.id === 'pong' && <PongGame />}
          {interest.id === 'movies' && <MoodTracker />}
          {interest.id === 'fitness' && <FitnessPlan />}
          {interest.id === 'pet' && <TamagotchiPet />}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const InterestsRibbon: React.FC = () => {
  const [active, setActive] = useState<InterestItem | null>(null);
  const getPrefix = (item: InterestItem) => item.prefix ?? 'I like';

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
    return undefined;
  }, [active]);

  const handleOpen = (interest: InterestItem) => {
    setActive(interest);
  };

  return (
    <>
      <div>
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
          {INTERESTS.map((interest) => (
            <button
              key={interest.id}
              type="button"
              onClick={() => handleOpen(interest)}
              className="glow-reactive glow-button interest-tag flex w-full items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-600 md:w-auto"
              aria-label={`Open ${interest.label} feature`}
            >
              <span className="text-zinc-500">{interest.icon}</span>
              <span className="font-mono tracking-wide">
                <span className="text-zinc-200">#{interest.tag ?? toHashTag(interest.action)}</span>
                <span className="ml-2 text-zinc-400">{getPrefix(interest)} {interest.label}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <InterestModal interest={active} onClose={() => setActive(null)} />
        ) : null}
      </AnimatePresence>
    </>
  );
};
