function applyStyle(element, binding){

  Object.keys(binding.modifiers).forEach((key)=>{
    element.style[key] = '5px';
  })
  element.style.position = 'absolute';
}

export default{
  bind: (element, binding)=>{
    applyStyle(element, binding);
  },
  update: (element, binding)=>{
    applyStyle(element, binding);
  }, 
}