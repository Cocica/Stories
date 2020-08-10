class SlideStories {
    constructor(id) {
      this.stories = document.querySelector(`[data-slide="${id}"]`);
      this.active = 0;
      this.init();
    }
  
    activeSlide(index) {
      this.active = index;
      this.items.forEach((item) => item.classList.remove('active'));
      this.items[index].classList.add('active');
      this.thumbItems.forEach((item) => item.classList.remove('active'));
      this.thumbItems[index].classList.add('active');
      this.autoSlide();
    }
  
    prev() {
      if (this.active > 0) {
        this.activeSlide(this.active - 1);
      } else {
        this.activeSlide(this.items.length - 1);
      }
    }
  
    next() {
      if (this.active < this.items.length - 1) { // if para verificar se o for o ultimo stories
        this.activeSlide(this.active + 1);       // volta para o primeiro
      } else {
        this.activeSlide(0);
      }
    }
  
    addNavigation() {
      const nextBtn = this.stories.querySelector('.stories-next');
      const prevBtn = this.stories.querySelector('.stories-prev');
      nextBtn.addEventListener('click', this.next);
      prevBtn.addEventListener('click', this.prev);
    }
  
    addThumbItems() {
      this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
      this.thumbItems = Array.from(this.thumb.children);
    }
  
    autoSlide() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.next, 5000);
    }
  
    init() {
      this.next = this.next.bind(this); //bindando o obj this para sempre referenciar a classe slidestories
      this.prev = this.prev.bind(this);
      this.items = this.stories.querySelectorAll('.stories-items > *');
      this.thumb = this.stories.querySelector('.stories-thumb');
      this.addThumbItems();
      this.activeSlide(0);
      this.addNavigation();
    }
  }
  
  new SlideStories('stories');