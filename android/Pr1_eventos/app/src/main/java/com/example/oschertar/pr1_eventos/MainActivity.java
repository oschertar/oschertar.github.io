package com.example.oschertar.pr1_eventos;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private TextView texto;
    private Button boton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        texto = (TextView) findViewById(R.id.texto);
        boton = (Button) findViewById(R.id.boton);
        boton.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                texto.setText("Has pulsado el botón");
            }
        });
        boton.setOnLongClickListener(new Button.OnLongClickListener() {
            @Override
            public boolean onLongClick(View v) {
                texto.setText("Has pulsado el botón de forma continua.");
                return true;
            }
        });
    }

    /*public void botonClick(View view){
        texto.setText("Has pulsado el botón");
    }*/
}
