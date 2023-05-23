import { Affix, Transition, Button, useMantineTheme } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { ArrowBigUpLine } from "tabler-icons-react";

export default function ScrollAffix() {
    const [scroll, scrollTo] = useWindowScroll();

    const theme = useMantineTheme();

    return (
        <Affix position={{ "bottom": 20 }} style={{ left: '50%', transform: 'translateX(-50%)' }}>
            <Transition transition="slide-up" mounted={scroll.y > 0}>
                {(transitionStyles) => (
                    <Button
                        leftIcon={
                            <ArrowBigUpLine size={20} strokeWidth={2} />
                        }
                        style={transitionStyles}
                        variant="light"
                        onClick={() => scrollTo({ y: 0 })}
                    >
                        Back to Start
                    </Button>
                )}
            </Transition>
        </Affix>
    );
}
