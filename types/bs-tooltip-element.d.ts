import Tooltip from 'bootstrap/js/dist/tooltip';
declare const Placements: readonly ["auto", "top", "bottom", "left", "right"];
declare type Placement = typeof Placements[number];
export declare class BsTooltipElement extends HTMLElement {
    static get observedAttributes(): string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string): void;
    private init;
    private refresh;
    private isShown;
    private showTooltip;
    private hideTooltip;
    private update;
    get manual(): boolean;
    set manual(value: boolean);
    get show(): boolean;
    set show(value: boolean);
    get disabled(): boolean;
    set disabled(value: boolean);
    get tooltip(): Tooltip | undefined;
    get placement(): Placement;
    get contentElement(): HTMLElement;
    get content(): string | undefined;
    set content(value: string | undefined);
}
declare global {
    interface Window {
        BsTooltipElement: typeof BsTooltipElement;
    }
}
export {};
