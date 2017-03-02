package com.example.oschertar.hortalizas;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

public class VisualizarHortalizaActivity extends AppCompatActivity {
    TextView tituloHortaliza, descripcionHortaliza;
    ImageView imagenHortaliza;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_visualizar_hortaliza);
        Bundle bundle = this.getIntent().getExtras();

        imagenHortaliza = (ImageView) findViewById(R.id.imagenHortaliza);
        tituloHortaliza = (TextView) findViewById(R.id.tituloHortaliza);
        descripcionHortaliza = (TextView) findViewById(R.id.descripcionHortaliza);

        imagenHortaliza.setImageResource(bundle.getInt("IMAGEN"));
        tituloHortaliza.setText(bundle.getString("NOMBRE"));
        descripcionHortaliza.setText(bundle.getString("DESCRIPCION"));
    }

}
