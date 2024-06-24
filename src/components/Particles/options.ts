import type {ISourceOptions} from "@tsparticles/engine";

export const baseOpt: ISourceOptions = {

    smooth: true,
    duration: 1.1,
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
                acceleration: 10
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
                    value: "💀",
                },
            },
        },
    },
    background: {
        color: ' ',
    },
};
export const emitter = {
    position: {x:1, y:1},
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
                    value: "💀",
                },
            },
        },
    },

};
