import { Affix, Transition, Button } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { ArrowBigUpLine } from "tabler-icons-react";

export default function MyFooter() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            leftIcon={
              <ArrowBigUpLine size={20} strokeWidth={2} color={"white"} />
            }
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
