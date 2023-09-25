class BlogModal extends HTMLElement {
    static get observedAttributes(){
        return['open','title','content','briefdescription'];
    }   
    constructor(){
        super();
        this.attachShadow({mode:'open'}); //addin custom event to close the blog-modal
        this.close = new CustomEvent('close',{
            bubbles: true,
            cancelable:false,
            detail:{
                open:false
            }   
        })
    }
    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(attrName,oldValue,newValue){
        if(attrName!== 'open' && oldValue!== newValue){
            this[attrName]=newValue;
        }else if(attrName === 'open') {
            this[attrName]=this.hasAttribute(attrName);
        }
        this.render();
    }
    render(){
        const {shadowRoot} = this;
        const templateNode = document.getElementById('modal-template'); 

        shadowRoot.innerHTML='';
        if(templateNode){
            const instance = document.importNode(templateNode.content,true);
            const close = instance.querySelector('.close');
            const wrapper = instance.querySelector('.wrapper');
            const closeEvent = this.close;
            close.onclick = function () {
                // console.log('close was clicked');
                this.dispatchEvent(closeEvent);
            }.bind(this);    
            const blogModal = document.querySelector('blog-modal');       
            blogModal.addEventListener('close', () =>{
                // console.log('close was called');
                wrapper.classList.remove('open');
                this['open']=false;
            })
            if(this['open']=== true){
                instance.querySelector('.wrapper').classList.add('open');
            }
            instance.querySelector('.title').innerHTML=this['title'];
            instance.querySelector('.content').innerHTML=this['content'];
            instance.querySelector('.briefdescription').innerHTML=this['briefdescription'];
            shadowRoot.appendChild(instance);
        } else{
            shadowRoot.innerHTML='<p>Error try again </p>';
        }
    }
}
customElements.define('blog-modal', BlogModal);