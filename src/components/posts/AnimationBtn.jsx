import React, { useCallback } from "react";

import { RenderButtons } from "./RenderButtons";

export const AnimationBtn = (btnProps) => {

    const {idxArticle ,setIdxArticle, animatedElementRef} = btnProps;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const setEventListener = (nextEventHandler) => {
        animatedElementRef.current.addEventListener("animationend", nextEventHandler, {
            once: true
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const runEndAnimation = () => {
        animatedElementRef.current.classList.remove(animatedElementRef.current.classList[1]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const runNextPost = (newPostIdx,prevAnimation,newAnimation) => {
        setIdxArticle(newPostIdx);
        animatedElementRef.current.classList.remove(prevAnimation);
        animatedElementRef.current.classList.add(newAnimation);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
   const handleNextAnimation = useCallback(() => {
        const prevAnimationDisplayed =  animatedElementRef.current.classList[1];

        if(prevAnimationDisplayed === "move-left") {
            runNextPost(idxArticle - 1 ,prevAnimationDisplayed,"move-prev");
        }

        else {
            runNextPost(idxArticle + 1 ,prevAnimationDisplayed,"move-next");
        }

        setEventListener(runEndAnimation);

    }, [animatedElementRef, idxArticle, runEndAnimation, runNextPost, setEventListener]);
    
    //run the first text animation
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClick = (moveAnimationDirection) => {
        animatedElementRef.current.classList.add(moveAnimationDirection);
        setEventListener(handleNextAnimation);
    }
    
    return (
        <RenderButtons idxArticle = { idxArticle } handleClick = { handleClick }  />
    )
}