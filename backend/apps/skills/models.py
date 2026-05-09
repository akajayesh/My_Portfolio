from django.db import models

class Skill(models.Model):
    category = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    proficiency = models.IntegerField(default=50, help_text="Proficiency percentage (0-100)")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['category', 'name']

    def __str__(self):
        return f"{self.name} ({self.category})"
