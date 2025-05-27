'use client';
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function FondoParticulas() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        init && (
            <div className="absolute inset-0 z-0 h-full w-full">
                <Particles
                    id="tsparticles"
                    options={{
                        fullScreen: { enable: false },
                        background: {
                            color: { value: "#ffffff00" },
                        },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: { enable: true, mode: "push" },
                                onHover: { enable: true, mode: "repulse" },
                            },
                            modes: {
                                push: { quantity: 4 },
                                repulse: { distance: 300, duration: 0.4 },
                            },
                        },
                        particles: {
                            color: { value: "#f97316" }, // naranja vibrante
                            links: {
                                enable: true,
                                color: "#f97316",
                                distance: 150,
                                opacity: 0.6,
                                width: 1.2,
                            },
                            move: {
                                enable: true,
                                speed: 1,
                                direction: "none",
                                outModes: { default: "bounce" },
                            },
                            number: {
                                value: 80, // más cantidad
                                density: { enable: true},
                            },
                            opacity: { value: 0.7 },
                            shape: { type: "circle" },
                            size: { value: { min: 2, max: 5 } }, // más grandes
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        )
    );
}
