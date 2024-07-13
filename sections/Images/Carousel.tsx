import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../../components/ui/Icon.tsx";
import Slider from "../../components/ui/Slider.tsx";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: ImageWidget;

  /** @description mobile otimized image */
  mobile: ImageWidget;

  /** @description Image's alt text */
  alt: string;

  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Image text title */
    title: string;
    /** @description Image text subtitle */
    subTitle: string;
    /** @description Button label */
    label: string;
  };
}

export interface Props {
  images?: Banner[];

  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;

  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Carousel({ images = [], interval }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class={clx(
        "grid",
        "grid-rows-[1fr_32px_1fr_64px]",
        "grid-cols-[32px_1fr_32px] min-h-[660px]",
        "sm:grid-cols-[112px_1fr_112px] sm:min-h-min",
        "w-screen",
      )}
    >
      <div
        class="col-span-full row-span-full	"
        style={{
          overflow: "hidden",
        }}
      >
        <img
          src={"https://cdn.discordapp.com/attachments/1162519701457490040/1261730972269940837/Carrossel.png?ex=66940609&is=6692b489&hm=23aa7f11005e76dcb265c696db44659db219ebf1ede1c55303dc1c563b00aa40&"}
        />
      </div>

      <div class="hidden sm:flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton
          class="btn btn-neutral btn-outline btn-circle no-animation btn-sm"
          disabled={false}
        >
          <Icon id="chevron-right" class="rotate-180" />
        </Slider.PrevButton>
      </div>

      <div class="hidden sm:flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton
          class="btn btn-neutral btn-outline btn-circle no-animation btn-sm"
          disabled={false}
        >
          <Icon id="chevron-right" />
        </Slider.NextButton>
      </div>

      <ul
        class={clx(
          "col-span-full row-start-4 z-10",
          "carousel justify-center gap-3",
        )}
      >
        {images.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot
              index={index}
              class={clx(
                "bg-black opacity-20 h-3 w-3 no-animation rounded-full",
                "disabled:w-8 disabled:bg-base-100 disabled:opacity-100 transition-[width]",
              )}
            >
            </Slider.Dot>
          </li>
        ))}
      </ul>

      <Slider.JS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default Carousel;
