import React, { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import { particleType } from "../../types.ts";
import { baseOpt, emitter } from "./options.ts";

type Prop = {
    emojiType: particleType;
};

export const EmojiConfetti: React.FC<Prop> = ({ emojiType }) => {
    const [init, setInit] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (emojiType === particleType.HEART) {
            emitter.particles.shape.options.emoji.value = "❤️";
            buttonRef.current = document.querySelector("#like");
        } else if (emojiType === particleType.SKULL) {
            emitter.particles.shape.options.emoji.value = "💀️";
            buttonRef.current = document.querySelector("#dislike");
        }
    }, [emojiType]);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    useEffect(() => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            emitter.position = {
                x: ((rect.left + rect.right) / 2 / window.innerWidth) * 100,
                y: ((rect.top + rect.bottom) / 2 / window.innerHeight) * 100,
            };
        }
    }, [emojiType, init]);

    const opt = {
        ...baseOpt,
        emitters: [emitter],
    };

    if (init) {
        return (
            <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 12 }}>
                <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={opt} />
            </div>
        );
    }

    return null;
};