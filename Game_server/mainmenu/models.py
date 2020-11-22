from django.db import models


class Mainmenu(models.Model):
    login = models.CharField('Login', max_length=20)
    pasword = models.CharField('Pasword', max_length=20)
    max_result_snake = models.IntegerField('Max_result_snake')

<<<<<<< HEAD
    def __str__(self):
        return self.login
=======
>>>>>>> efad5b57bef64153349a8a1f4d656ab1202169eb
