from django.shortcuts import render
from django.http import JsonResponse
import pyjokes

# Create your views here.

def home(request):
    jokes = pyjokes.get_jokes()
    for joke in jokes:
        return render(request, "index.html", {"joke":joke})


def get_joke(request):
    joke = pyjokes.get_joke()
    return JsonResponse({'joke': joke})