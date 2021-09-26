var key1 = Symbol('icon1');
var key2 = Symbol('icon2');
var key3 = Symbol('icon3');
var key4 = Symbol('icon4');
var key5 = Symbol('icon5');
var key6 = Symbol('icon6');
var data = {
    [key1]: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
    [key2]: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.9 22.4L16.9 15.5C18.2 13.8 19 11.8 19 9.5 19 4.3 14.7 0 9.5 0 4.3 0 0 4.3 0 9.5 0 14.7 4.3 19 9.5 19 11.8 19 13.8 18.2 15.5 16.9L22.4 23.9C22.6 24 23 24 23.1 23.9L23.9 23.1C24 23 24 22.6 23.9 22.4ZM9.5 17C5.4 17 2 13.6 2 9.5 2 5.4 5.4 2 9.5 2 13.6 2 17 5.4 17 9.5 17 13.6 13.6 17 9.5 17ZM9.5 17" style=" stroke:none;fill:rgb(0%,0%,0%)"/></svg>',
    [key3]: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>',
    [key4]: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
    [key5]: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
    [key6]: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>'
};
var el = document.querySelector('.btn-h-icon');
var el2 = document.querySelector('.nav-right');
var el3 = document.querySelector('.nav-fill > input');

var el4 = document.querySelector('.dash-icon');
var el5 = document.querySelector('.cat-icon');
var el6 = document.querySelector('.page-icon');
var el7 = document.querySelector('.post-icon');

if (el) {
    el.insertAdjacentHTML('afterbegin', data[key1]);    
}

if (el2) {
    el2.insertAdjacentHTML('afterbegin', data[key2]);
}

if (el4) {
    el4.insertAdjacentHTML('afterbegin', data[key3])
}

if (el5) {
    el5.insertAdjacentHTML('afterbegin', data[key4])
}

if (el6) {
    el6.insertAdjacentHTML('afterbegin', data[key5])
}

if (el7) {
    el7.insertAdjacentHTML('afterbegin', data[key6])
}


if (el3) {
    el3.addEventListener('focus', action);
}


function action (e) {
    var t = e.target.closest('.search-c');
    if (!!t) {
        t.style.borderColor = "#FFB736";
    }
}

var list = document.querySelectorAll('.content-admin .categories-list li');
var cat = document.querySelector('.content-admin .categories-list');

if (!!cat) {
    cat.addEventListener('click', handler);

    function handler (e) {
        var t = e.target;
        var li = t.closest('li');
        
        if (li) {
            var classList = li.classList;
            classList.add('activated');
            for (var i = 0; i < list.length; i++) {
                if (list[i].classList.value !== classList.value) {
                    list[i].classList.remove('activated');
                }
            }
        }
    }
}