#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st,float pct){
    return smoothstep(pct-.02,pct,st.y)-
    smoothstep(pct,pct+.02,st.y);
}

void main(){
    vec2 st=gl_FragCoord.xy/u_resolution;
    float y=max(0.,st.x);// return x modulo of 0.5
    
    vec3 color=vec3(y);
    
    float pct=plot(st,y);
    color=(1.-pct)*color+pct*vec3(1.,0.,0.);
    
    gl_FragColor=vec4(color,1.);
}
