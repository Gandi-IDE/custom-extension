precision mediump float;

varying vec2 v_texcoord;
varying float v_textureid;

uniform sampler2D u_skins[SKIN_NUM];

void main() {
    int textureid = int(v_textureid);
    vec4 color;
    COLOR_IF_GET
    if (color.a == 0.0) discard;
    gl_FragColor = color;
}