import sys
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login, logout as auth_logout
# Create your views here.
def login(request):
    print('login view', file=sys.stderr)
    user = authenticate(assertion=request.POST['assertion'])
    if user is not None:
        auth_login(request,user)
    return  redirect('/')

def logout(request):
        auth_logout(request)
        return  redirect('/')