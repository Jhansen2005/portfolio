function showSidebar(){
    // alert('ehe')
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.display = 'flex';
    sidebar.classList.toggle('animate')
}

function closeSidebar(){
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('animate2')
    sidebar.style.display = 'none';
}