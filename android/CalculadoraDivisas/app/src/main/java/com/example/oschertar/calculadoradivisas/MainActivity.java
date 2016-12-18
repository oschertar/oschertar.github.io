package com.example.oschertar.calculadoradivisas;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.net.URLConnection;
import java.text.DecimalFormat;

public class MainActivity extends AppCompatActivity  implements View.OnClickListener{
    private EditText cantidad;
    private TextView textoResultado;
    private Button eurosADolares, dolaresAEuros, eurosALibras, librasAEuros, librasADolares, dolaresALibras;
    private double cantidadInicial, resultado;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        cantidad = (EditText)findViewById(R.id.cantidad);
        textoResultado = (TextView) findViewById(R.id.total);
        eurosADolares = (Button) findViewById(R.id.eurosadolares);
        dolaresAEuros = (Button) findViewById(R.id.dolaresaeuros);
        eurosALibras = (Button) findViewById(R.id.eurosalibras);
        librasAEuros = (Button) findViewById(R.id.librasaeuros);
        librasADolares = (Button) findViewById(R.id.librasadolares);
        dolaresALibras = (Button) findViewById(R.id.dolaresalibras);
        cantidad.setText("0");


        eurosADolares.setOnClickListener(this);
        dolaresAEuros.setOnClickListener(this);
        eurosALibras.setOnClickListener(this);
        librasAEuros.setOnClickListener(this);
        librasADolares.setOnClickListener(this);
        dolaresALibras.setOnClickListener(this);

    }

    public String abrirConexion(double cantidad, String origen, String destino) {
        BufferedReader reader;
        URLConnection conexion;
        try {
            URL url = new URL("http://www.google.com/finance/converter?a="+cantidad+"&from="+origen+"&to="+destino+"");
            conexion = url.openConnection();
            String texto = "";
            reader = new BufferedReader(new InputStreamReader(conexion.getInputStream()));
            String cad;
            while ( (cad = reader.readLine()) != null){
                texto += cad ;
            }
            System.out.println(texto);
            return texto;
        } catch (Exception e) {
            System.out.println(e.getMessage());

        }

        return null;
    }

























    public void onClick(View v) {

        cantidadInicial = Double.parseDouble(cantidad.getText().toString());
        String moneda = "";
        DecimalFormat df = new DecimalFormat("#.##");
        switch (v.getId()) {
            case R.id.eurosadolares:

                resultado = cantidadInicial * 1.04614;
                moneda = "$";

                break;
            case R.id.dolaresaeuros:

                resultado = cantidadInicial * 0.955895;
                moneda = "€";

                break;

            case R.id.eurosalibras:
                resultado = cantidadInicial * 0.840664;
                moneda = "£";
                break;

            case R.id.librasaeuros:
                resultado = cantidadInicial * 1.18954;
                moneda = "€";
                break;

            case R.id.librasadolares:
                resultado = cantidadInicial * 1.24448;
                moneda = "$";
                break;

            case R.id.dolaresalibras:
                resultado = cantidadInicial * 0.803451;
                moneda = "£";
                break;

        }
        textoResultado.setText(df.format(resultado) + " " + moneda);
    }




}
