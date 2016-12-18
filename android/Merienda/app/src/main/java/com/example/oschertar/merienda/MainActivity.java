package com.example.oschertar.merienda;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import org.w3c.dom.Text;

public class MainActivity extends AppCompatActivity {

    private Button comer;
    private TextView mensaje;
    private ImageView imagen;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        comer = (Button)findViewById(R.id.comer);
        mensaje = (TextView)findViewById(R.id.mensaje);
        imagen = (ImageView)findViewById(R.id.imagen);

    comer.setOnClickListener(new Button.OnClickListener() {
        @Override
        public void onClick(View v) {
            imagen.setImageResource(R.drawable.despues);
            mensaje.setText(R.string.fin);
        }
    });

    }
}
