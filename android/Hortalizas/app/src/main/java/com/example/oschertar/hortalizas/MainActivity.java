package com.example.oschertar.hortalizas;

import android.content.Intent;
import android.media.Image;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    ListView lista;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        rellenarLista();

    }


    void rellenarLista(){

        final String []nombreHortalizas = {"Tomate", "Lechuga", "Zanahoria", "Alcachofa", "Pepino", "Maiz"};
        final String []descripcionHortalizas = {"El tomate es la hortaliza de mayor importancia en el mundo. Se cultiva en todo el mundo, siendo los principales países productores China y Estados Unidos. Ver más...",
                "La lechuga es una hortaliza muy popular que se cultiva por sus grandes hojas que en algunos casos se aprietan formando repollos más o menos compactos. Ver más...",
                "La zanahoria es una de las hortalizas más cultivadas en el mundo. Su consumo se ha extendido ampliamente, ya que actualmente se encuentra disponible en los mercados durante todo el año. Ver más...",
                "La alcachofa es una inflorescencia inmadura de color verde o morado. Se consume de muy diversas formas y su sabor es muy apreciado. Ver más...",
                "El pepino es una hortaliza de verano, de forma alargada y de unos 15cm de largo. Su piel es de color verde que se aclara hasta volverse amarilla en la madurez. Ver más...",
                "El maíz dulce se comercializa bien en forma de ‘mazorca’ o bien como granos sueltos, frescos en conserva o congelados. Ver más..."};
        final int[] imagenesHortalizas = {R.drawable.tomate, R.drawable.lechuga, R.drawable.zanahoria, R.drawable.alcachofa, R.drawable.pepino, R.drawable.maiz};

        listaHortalizas vistaLista = new listaHortalizas(MainActivity.this, nombreHortalizas, descripcionHortalizas, imagenesHortalizas);

        lista = (ListView) findViewById(R.id.listaHortalizas);
        lista.setAdapter(vistaLista);

        lista.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent intent = new Intent(MainActivity.this, VisualizarHortalizaActivity.class);
                Bundle bundle = new Bundle();
                bundle.putString("NOMBRE", nombreHortalizas[position]);
                bundle.putString("DESCRIPCION", descripcionHortalizas[position]);
                bundle.putInt("IMAGEN", imagenesHortalizas[position]);
                intent.putExtras(bundle);
                startActivity(intent);

            }
        });

    }
}
