import "slick-carousel/slick/slick.css";
import "../../styles/MatchPage.css"

import {Profile} from "./Profile.tsx";
import {BottomBar} from "./BottomBar.tsx";
import {useCallback, useEffect, useState} from "react";
import {EmojiConfetti} from "../Particles/EmojiConfetti.tsx";
import {particleType} from "../../types.ts";

export const Match = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    const [emojiType, setEmojiType] = useState(particleType.NONE)

    const images:string[] = [
        './pasha/photo_2023-09-28_22-02-49.jpg',
        './pasha/photo_2024-01-06_19-46-53.jpg',
        './pasha/photo_2024-03-13_12-34-57.jpg',
        './pasha/photo_2024-03-13_12-34-59.jpg',
        './pasha/photo_2024-03-13_12-36-31 (4).jpg',
       ' ./pasha/photo_2024-03-13_12-34-59 (2).jpg',
        './pasha/photo_2024-03-13_12-34-59 (4).jpg',
        './pasha/photo_2024-03-13_12-34-59 (6).jpg'
    ];
    // const getRandomImage = (): string => {
    //     const randomIndex = Math.floor(Math.random() * images.length);
    //     return images[randomIndex];
    // };
    const props = (id: number) => {
        return{
            profileImageURL: images[1],
            description: "Привет! Меня зовут Павел, я фурри и горжусь этим! Учусь в БГТУ, где изучаю React, и живу в трехэтажном коттедже. В свободное время люблю заниматься косплеем, рисовать и участвовать в фурри-конвенциях. Обожаю животных и мечтаю завести еще несколько питомцев.\n" +
                "\n" +
                "Интересы:\n" +
                "\n" +
                "    Фурри-культура\n" +
                "    Рисование\n" +
                "    Путешествия в чемодане\n" +
                "    Технологии и гаджеты\n" +
                "    Видеоигры и аниме\n" + id.toString(),
            username: "Paul",
            age: 18,
            location: {country:"Belarus", city:"Minsk"},
            id: id
        }

    }
    const onLikeHandler  = useCallback( () =>{
        if(showConfetti) return;
        setEmojiType(particleType.HEART);
        setShowConfetti(true);
    },[showConfetti])

    const onDislikeHandler = useCallback( ()=>{
        if(showConfetti) return;
        setEmojiType(particleType.SKULL);
        setShowConfetti(true);
    },[showConfetti])

    useEffect(() => {
        if (showConfetti) {
            const timeoutId = setTimeout(() => setShowConfetti(false), 400);
            return () => clearTimeout(timeoutId);
        }
    }, [showConfetti]);
    return (
        <div>
            <Profile data={props(1)}/>
            <BottomBar onLike={onLikeHandler} onDislike={onDislikeHandler}/>
            {showConfetti && <EmojiConfetti emojiType={emojiType}/>}
        </div>

    );
};