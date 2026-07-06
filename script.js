<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

document.querySelectorAll('.nav-link').forEach(link=>{

link.addEventListener('click',function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior:'smooth'
});

});

});
