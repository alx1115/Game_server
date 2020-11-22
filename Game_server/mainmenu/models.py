from django.db import models


class Mainmenu(models.Model):
    title = models.CharField('Заголовок', max_length=200)
    text = models.TextField('Текст')
    date = models.DateTimeField('Дата')

