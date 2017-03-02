package com.example.oschertar.conecta4;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class ElegirModoActivity extends AppCompatActivity {
    Button modoOnline, modoSolitario;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_elegir_modo);
        modoOnline = (Button) findViewById(R.id.modoOnline);
        modoSolitario = (Button) findViewById(R.id.modoNormal);

        modoOnline.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), ModoOnlineActivity.class));
            }
        });

        modoSolitario.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), MainActivity.class));
            }
        });
    }
}
