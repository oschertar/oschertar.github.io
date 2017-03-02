package com.example.oschertar.conecta4;

import android.os.Bundle;
import android.preference.PreferenceFragment;


public class preferenciasFragment extends PreferenceFragment {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Load the preferences from an XML resource
        addPreferencesFromResource(R.xml.setting);
    }
}