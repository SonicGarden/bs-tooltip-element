import Tooltip from 'bootstrap/js/dist/tooltip'

type State = {
  tooltip: Tooltip
}

const states = new WeakMap<BsTooltipElement, State>()

const Placements = ['auto', 'top', 'bottom', 'left', 'right'] as const

type Placement = typeof Placements[number]

export class BsTooltipElement extends HTMLElement {
  static get observedAttributes() {
    return ['content', 'disabled', 'show']
  }

  connectedCallback() {
    this.style.display = 'inline-block'
    window.setTimeout(() => this.init(), 0)
  }

  disconnectedCallback() {
    this.tooltip?.dispose()
    states.delete(this)
  }

  attributeChangedCallback(): void {
    this.update()
  }

  private init() {
    const tooltip = new Tooltip(this, {
      title: this.contentElement,
      html: true,
      sanitize: false,
      trigger: this.manual ? 'manual' : 'hover focus',
      placement: this.placement
    })

    const state = {tooltip}
    states.set(this, state)

    this.update()
  }

  private update() {
    if (this.manual) {
      this.show ? this.tooltip?.show() : this.tooltip?.hide()
    }

    if (this.disabled) {
      this.tooltip?.disable()
    } else {
      this.tooltip?.enable()
    }
  }

  get manual(): boolean {
    return this.hasAttribute('manual')
  }

  set manual(value: boolean) {
    if (value) {
      this.setAttribute('manual', '')
    } else {
      this.removeAttribute('manual')
    }
  }

  get show(): boolean {
    return this.hasAttribute('show')
  }

  set show(value: boolean) {
    if (value) {
      this.setAttribute('show', '')
    } else {
      this.removeAttribute('show')
    }
  }

  get disabled(): boolean {
    return this.hasAttribute('disabled')
  }

  set disabled(value: boolean) {
    if (value) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  get tooltip(): Tooltip | undefined {
    return states.get(this)?.tooltip
  }

  get placement(): Placement {
    const placement = this.getAttribute('placement')
    return placement && (Placements as readonly string[]).includes(placement) ? (placement as Placement) : 'top'
  }

  get contentElement(): HTMLElement {
    const template = this.querySelector('template')

    const div = document.createElement('div')
    div.classList.add('text-start')

    if (template) {
      // eslint-disable-next-line github/no-inner-html
      div.innerHTML = template.innerHTML
    } else {
      div.textContent = this.getAttribute('content')
    }

    return div
  }

  get content(): string | undefined {
    return this.getAttribute('content') ?? undefined
  }

  set content(value) {
    if (value) {
      this.setAttribute('content', value)
    } else {
      this.removeAttribute('content')
    }
  }
}

declare global {
  interface Window {
    BsTooltipElement: typeof BsTooltipElement
  }
}

if (!window.customElements.get('bs-tooltip')) {
  window.BsTooltipElement = BsTooltipElement
  window.customElements.define('bs-tooltip', BsTooltipElement)
}
