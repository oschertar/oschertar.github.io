package com.example.oschertar.baloncestomarcador;

import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import org.w3c.dom.Text;

public class MainActivity extends AppCompatActivity {
    private Button sumar1local;
    private Button sumar2local;
    private Button sumar3local;
    private Button sumar1visitante;
    private Button sumar2visitante;
    private Button sumar3visitante;
    private Button resetLocal;
    private Button resetVisitante;
    private TextView marcadorLocal;
    private TextView marcadorVisitante;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        sumar1local = (Button) findViewById(R.id.sumar1local);
        sumar2local = (Button) findViewById(R.id.sumar2local);
        sumar3local = (Button) findViewById(R.id.sumar3local);
        sumar1visitante = (Button) findViewById(R.id.sumar1visitante);
        sumar2visitante = (Button) findViewById(R.id.sumar2visitante);
        sumar3visitante = (Button) findViewById(R.id.sumar3visitante);
        marcadorLocal = (TextView) findViewById(R.id.marcadorlocal);
        marcadorVisitante = (TextView) findViewById(R.id.marcadorVisitante);
        resetLocal = (Button) findViewById(R.id.resetLocal);
        resetVisitante = (Button) findViewById(R.id.resetVisitante);
        sumar1local.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                int resultado= Integer.parseInt(marcadorLocal.getText().toString())+1;
                marcadorLocal.setText(String.valueOf(resultado));
                colorearMarcadores();
            }
        });

        sumar2local.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                int resultado= Integer.parseInt(marcadorLocal.getText().toString())+2;
                marcadorLocal.setText(String.valueOf(resultado));
                colorearMarcadores();
            }
        });
        sumar3local.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                int resultado= Integer.parseInt(marcadorLocal.getText().toString())+3;
                marcadorLocal.setText(String.valueOf(resultado));
                colorearMarcadores();
            }
        });

        sumar1visitante.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                int resultado= Integer.parseInt(marcadorVisitante.getText().toString())+1;
                marcadorVisitante.setText(String.valueOf(resultado));
                colorearMarcadores();
            }
        });
        sumar2visitante.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                int resultado= Integer.parseInt(marcadorVisitante.getText().toString())+2;
                marcadorVisitante.setText(String.valueOf(resultado));
                colorearMarcadores();
            }
        });
        sumar3visitante.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                int resultado= Integer.parseInt(marcadorVisitante.getText().toString())+3;
                marcadorVisitante.setText(String.valueOf(resultado));
                colorearMarcadores();
            }
        });

        resetLocal.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                int resultado= 0;
                marcadorLocal.setText(String.valueOf(resultado));
                colorearMarcadores();
            }
        });

        resetVisitante.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                int resultado= 0;
                marcadorVisitante.setText(String.valueOf(resultado));
                colorearMarcadores();
            }
        });
    }

    public void colorearMarcadores(){
        if(Integer.parseInt(marcadorVisitante.getText().toString()) > Integer.parseInt(marcadorLocal.getText().toString())){
            marcadorVisitante.setTextColor(Color.GREEN);
            marcadorLocal.setTextColor(Color.BLUE);
        }else if(Integer.parseInt(marcadorVisitante.getText().toString()) < Integer.parseInt(marcadorLocal.getText().toString())){
            marcadorVisitante.setTextColor(Color.BLUE);
            marcadorLocal.setTextColor(Color.GREEN);
        }else{
            marcadorVisitante.setTextColor(Color.RED);
            marcadorLocal.setTextColor(Color.RED);
        }
    }
}
