var routes=[ // Index page
{
    path: '/', url: './index.html', name: 'home',
}
,
{
    path: '/about/', url: './pages/about.html', name: 'about',
}
,
{
    path: '/login/', componentUrl: './pages/login.html', name: 'login',
}
,
{
    path: '/password/', componentUrl: './pages/password.html', name: 'password',
}
,
{
    path: '/register/', componentUrl: './pages/register.html', name: 'login',
}
,
,
{
    path: '/profile/', componentUrl: './pages/profile.html', name: 'profile',
}
,
{
    path: '/home/', componentUrl: './pages/home.html', name: 'home',
}
,
{
    path: '/students/', componentUrl: './pages/students.html', name: 'students',
},
{
    path: '/view_student/', componentUrl: './pages/view_student.html', name: 'view_student',
}
,
{
    path: '/submit-post/', componentUrl: './pages/new_post.html', name: 'submit_post',
}
,
{
    path: '/year-book/', componentUrl: './pages/yearbook.html', name: 'yearbook',
}

, // Default route (404 page). MUST BE THE LAST
{
    path: '(.*)', url: './pages/home.html',
}

];