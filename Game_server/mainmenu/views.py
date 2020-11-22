from django.shortcuts import render
from .models import Mainmenu


def index(request):
    mainmenu = Mainmenu.objects.all()
    return render(request, 'mainmenu/index.html', {'mainmenu':mainmenu})

def register(request):
    mainmenu = Mainmenu.objects.all()
    return render(request, 'mainmenu/registration.html', {'mainmenu':mainmenu})

def login(request):
    mainmenu = Mainmenu.objects.all()
    return render(request, 'mainmenu/login.html', {'mainmenu':mainmenu})
    
