package com.example.oschertar.hortalizas;

import android.app.Activity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

public class listaHortalizas extends ArrayAdapter<String>{

    private final Activity context;
    private final String[] titulos;
    private final String[] descripciones;
    private final int[] imagenes;
    public listaHortalizas(Activity context,
                           String[] titulos, String[] descripciones, int[] imagenes) {
        super(context, R.layout.item_lista, titulos);
        this.context = context;
        this.titulos = titulos;
        this.descripciones = descripciones;
        this.imagenes = imagenes;

    }
    @Override
    public View getView(int position, View view, ViewGroup parent) {
        LayoutInflater inflater = context.getLayoutInflater();
        View vistaItem= inflater.inflate(R.layout.item_lista, null, true);
        TextView titulo = (TextView) vistaItem.findViewById(R.id.tituloItem);
        TextView descripcion = (TextView) vistaItem.findViewById(R.id.descripcionItem);
        ImageView imagen = (ImageView) vistaItem.findViewById(R.id.imagenItem);

        titulo.setText(titulos[position]);
        descripcion.setText(descripciones[position]);
        imagen.setImageResource(imagenes[position]);

        return vistaItem;
    }
}
