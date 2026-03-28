"use client";

import { useRef, useCallback } from "react";
import { DitherParams, DotCoord } from "./mosaik";

export function useWorkerMosaik() {
    const workerRef = useRef<Worker | null>(null);

    const getWorker = useCallback(() => {
        // Terminate old worker if busy
        if (workerRef.current) {
            workerRef.current.terminate();
        }
        const url = new URL("./mosaik.worker.ts", import.meta.url);
        const worker = new Worker(url);
        workerRef.current = worker;
        return worker;
    }, []);

    const runMosaik = useCallback(
        (
            imageData: ImageData,
            params: DitherParams,
            outputWidth: number,
            outputHeight: number,
            frameIndex = 0
        ): Promise<{ dots: DotCoord[]; frameIndex: number }> => {
            return new Promise((resolve) => {
                const worker = getWorker();
                worker.onmessage = (e) => {
                    resolve(e.data);
                    worker.terminate();
                    workerRef.current = null;
                };
                worker.postMessage({ imageData, params, outputWidth, outputHeight, frameIndex });
            });
        },
        [getWorker]
    );

    const terminate = useCallback(() => {
        workerRef.current?.terminate();
        workerRef.current = null;
    }, []);

    return { runMosaik, terminate };
}
