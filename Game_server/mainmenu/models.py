from django.db import models


class Mainmenu(models.Model):
    login = models.CharField('Login', max_length=20)
    pasword = models.CharField('Pasword', max_length=20)
    max_result_snake = models.IntegerField('Max_result_snake')

<<<<<<< HEAD
=======
    def __str__(self):
        return self.login
>>>>>>> f25b6f7bf7925e236c5e3f5fe94a751b6a019f75
