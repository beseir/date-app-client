import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
} from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import {particleType} from "../types.ts";

type prop ={
    emojiType: particleType
}
export const EmojiConfetti: React.FC<prop> = ({  emojiType }) => {
    const [init, setInit] = useState(false);
    const [emojiValue, setEmojiValue] = useState("");
    const [button, setButton] = useState(document.querySelector("#like"));
    useEffect(() => {
        switch (emojiType) {
            case particleType.HEART:{
                setEmojiValue("❤️");
                setButton(document.querySelector("#like"));
                break;
            }
            case particleType.SKULL:{
                setEmojiValue("💀");
                setButton(document.querySelector("#dislike"));
                break;
            }
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
    const baseOpt: ISourceOptions = {

        smooth: true,
        duration: 1,
        particles: {
            opacity: {
                value: 1,

            },
            size: {
                value: {
                    min: 12,
                    max: 14,
                },
                animation: {
                    enable: true,
                    speed: 5,
                    startValue: "max",
                    destroy: "min"
                }
            },
            move: {
                enable: true,
                gravity: {
                    enable: true,
                    acceleration: 9.81
                },
                speed: 25,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    default: 'destroy',
                },
            },
            rotate: {
                value: {
                    min: 0,
                    max: 90,
                },
                direction: 'random',
                move: true,
                animation: {
                    enable: true,
                    speed: 60,
                },
            },



            shape: {
                type: 'emoji',
                options: {
                    emoji: {
                        value: emojiValue,
                    },
                },
            },
        },
        background: {
            color: ' ',
        },
    };


        const rect = button.getBoundingClientRect();

        const emitterPosition = {
            x: ((rect.left + rect.right) / 2 / window.innerWidth) * 100,
            y: ((rect.top + rect.bottom) / 2 / window.innerHeight) * 100,
        };

        const emitter = {
            position: emitterPosition,
            startCount: 10,
            rate: { quantity: 0, delay: 0 },
            life: {
                duration: 0.1,
                count: 1,
            },
            particles: {
                move: {
                    direction: 'none',
                    duration: 1,
                    random: true,
                    straight: false,
                    outModes: {
                        default: 'destroy',
                    },
                },
                shape: {
                    type: 'emoji',
                    options: {
                        emoji: {
                            value: emojiValue,
                        },
                    },
                },
            },

        };

        const opt = {
            ...baseOpt,
            emitters: [emitter],
        };




    if (init) {
        return (
            <div style={{ position: 'absolute', width: '100%', height: '100%' , zIndex:12}}>
            <Particles

                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={opt}
            /></div>
        );
    }

    return <></>;
};