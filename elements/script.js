function switchReactiveWebComponentAttribute(sourceId) {
    const newValue = document.getElementById(sourceId).value;
    const element = document.getElementsByTagName('ng-reactive')[0];
    element.setAttribute('ng-my-input', newValue);

}