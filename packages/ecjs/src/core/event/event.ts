import type { Pools } from "../pools";

type Event<TPool> = { type: string; data: Pools<TPool> };

type EventHandler<T> = (data: T) => void;

export type { Event, EventHandler };
