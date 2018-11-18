using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DissolveControl : MonoBehaviour
{
    Renderer rend;
    public Material[] material;
    bool isCoroutineStarted = false;
    // Use this for initialization
    void Start()
    {

        rend = GetComponent<Renderer>();
        rend.enabled = false;      
       // rend.sharedMaterial = material[0];
     //   StartCoroutine(DissolveAnim(material));
    }
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Backspace))
        { 
            rend.enabled = true;
            rend.sharedMaterial = material[1];
            if (!isCoroutineStarted)
            {
                StartCoroutine(DissolveAnim(material[1]));
            }
        }

    }

    // Update is called once per frame

    IEnumerator DissolveAnim(Material material)
    {
        isCoroutineStarted = true;
        rend.sharedMaterial = material;
            material.SetFloat("Vector1_85440F88", 1.0f);
            for (float t = 1; t >= 0; t -= Time.deltaTime)
            {
                yield return null;
                yield return null;// wait 1 frame
                // here is where the weird generated property name goes
                material.SetFloat("Vector1_85440F88", t);
            }
            material.SetFloat("Vector1_85440F88", 0.0f);
        }

    }

