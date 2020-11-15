from django.shortcuts import render
from .models import Mainmenu


def index(request):
    mainmenu = Mainmenu.objects.all()
    return render(request, 'mainmenu/index.html', {'mainmenu':mainmenu})
