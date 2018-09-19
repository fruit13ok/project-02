# Generated by Django 2.0.5 on 2018-09-18 21:34

from django.db import migrations

def seed(apps, schema_editor):
    Preference = apps.get_model('foodie', 'Preference')

    Preference(api_id="1",cuisine="American").save()
    Preference(api_id="3",cuisine="Asian").save()
    Preference(api_id="132",cuisine="Belgian").save()
    Preference(api_id="159",cuisine="Brazilian").save()
    Preference(api_id="22",cuisine="Burmese").save()
    Preference(api_id="158",cuisine="Caribbean").save()
    Preference(api_id="25",cuisine="Chinese").save()
    Preference(api_id="153",cuisine="Cuban").save()
    Preference(api_id="149",cuisine="Ethiopian").save()
    Preference(api_id="112",cuisine="Filipino").save()
    Preference(api_id="45",cuisine="French").save()
    Preference(api_id="134",cuisine="German").save()
    Preference(api_id="156",cuisine="Greek").save()
    Preference(api_id="521",cuisine="Hawaiian").save()
    Preference(api_id="148",cuisine="Indian").save()
    Preference(api_id="114",cuisine="Indonesian").save()
    Preference(api_id="140",cuisine="Iranian").save()
    Preference(api_id="55",cuisine="Italian").save()
    Preference(api_id="207",cuisine="Jamaican").save()
    Preference(api_id="60",cuisine="Japanese").save()
    Preference(api_id="67",cuisine="Korean").save()
    Preference(api_id="901",cuisine="Laotian").save()
    Preference(api_id="136",cuisine="Latin American").save()
    Preference(api_id="66",cuisine="Lebanese").save()
    Preference(api_id="69",cuisine="Malaysian").save()
    Preference(api_id="70",cuisine="Mediterranean").save()
    Preference(api_id="73",cuisine="Mexican").save()
    Preference(api_id="137",cuisine="Middle Eastern").save()
    Preference(api_id="74",cuisine="Mongolian").save()
    Preference(api_id="147",cuisine="Moroccan").save()
    Preference(api_id="962",cuisine="Nicaraguan").save()
    Preference(api_id="139",cuisine="Pakistani").save()
    Preference(api_id="162",cuisine="Peruvian").save()
    Preference(api_id="219",cuisine="Polish").save()
    Preference(api_id="87",cuisine="Portuguese").save()
    Preference(api_id="84",cuisine="Russian").save()
    Preference(api_id="601",cuisine="Salvadorean").save()
    Preference(api_id="83",cuisine="Seafood").save()
    Preference(api_id="119",cuisine="Singaporean").save()
    Preference(api_id="972",cuisine="South American").save()
    Preference(api_id="471",cuisine="Southern").save()
    Preference(api_id="966",cuisine="Southwestern").save()
    Preference(api_id="89",cuisine="Spanish").save()
    Preference(api_id="190",cuisine="Taiwanese").save()
    Preference(api_id="150",cuisine="Tex-Mex").save()
    Preference(api_id="95",cuisine="Thai").save()
    Preference(api_id="142",cuisine="Turkish").save()
    Preference(api_id="308",cuisine="Vegetarian").save()
    Preference(api_id="641",cuisine="Venezuelan").save()
    Preference(api_id="99",cuisine="Vietnamese").save()

def fallow(apps, schema_editor):
    Preference = apps.get_model('foodie', 'Preference')
    Preference.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('foodie', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(seed, fallow)
    ]