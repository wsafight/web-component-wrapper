const defineComponent =
  (component: CustomElementConstructor) => (componentName: string) => {
    customElements.define(componentName, component)
  }

const defineComponents =
  (prefix: string) =>
  (componentName: string, component: CustomElementConstructor) => {
    customElements.define(`${prefix}-${componentName}`, component)
  }

export { defineComponent, defineComponents }
