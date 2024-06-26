import type {ISourceOptions} from "@tsparticles/engine";

export const baseOpt: ISourceOptions = {

    smooth: true,
    duration: 2,
    particles: {
        opacity: {
            value: 1,
        },
        size: {
            value: {
                min: 8,
                max: 14,
            },
        },
        move: {
            enable: true,
            gravity: {
                enable: true,
                acceleration: 15
            },
            speed: 10,
            direction: "none",
            random: true,
            straight: false,

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
            duration: 2,
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
