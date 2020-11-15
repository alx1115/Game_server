from django.db import models


class Mainmenu(models.Model):
    title = models.CharField('Заголовок', max_length=200)
    text = models.TextField('Текст')
    date = models.DateTimeField('Дата')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'
    

class Comment(models.Model):
    aticle = models.ForeignKey(Mainmenu, on_delete = models.CASCADE)
    author = models.CharField('автор комментария', max_length=50)
    comment = models.CharField('текст комментария', max_length=200)

    def __str__(self):
        return self.author

    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'
