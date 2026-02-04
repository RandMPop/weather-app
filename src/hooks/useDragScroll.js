import { useEffect } from "react";

export function useDragScroll(ref) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let isDown = false;
        let startX;
        let scrollLeft;
        const onMouseDown = e => {
            isDown = true;
            startX = e.pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        };

        const onMouseUp = () => isDown = false;
        const onMouseLeave = () => isDown = false;

        const onMouseMove = e => {
            if (!isDown) return;
            e.prevenrDefault();
            const x = e.pageX - el.offsetLeft;
            const walk = (x - startXtart) * 2;
            el.scrollLeft = scrollLeft - walk;
        };

        el.addEventListener('mousedown', onMouseDown);
        el.addEventListener('mouseup', onMouseUp);
        el.addEventListener('mouseleave', onMouseLeave);
        el.addEventListener('mousemove', onMouseMove);

        return () => {
            el.removeEventListener('mousedown', onMouseDown);
            el.removeEventListener('mouseup', onMouseUp);
            el.removeEventListener('mouseleave', onMouseLeave);
            el.removeEventListener('mousemove', onMouseMove);
        };

    }, [ref]);
}