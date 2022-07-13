import Tooltip from 'bootstrap/js/dist/tooltip';
declare const Placements: readonly ["auto", "top", "bottom", "left", "right"];
declare type Placement = typeof Placements[number];
export declare class BsTooltipElement extends HTMLElement {
    static get observedAttributes(): string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(): void;
    private init;
    private update;
    get manual(): boolean;
    get show(): boolean;
    get disabled(): boolean;
    get tooltip(): Tooltip | undefined;
    get placement(): Placement;
    get content(): HTMLElement;
}
declare global {
    interface Window {
        BsTooltipElement: typeof BsTooltipElement;
    }
}
export {};
