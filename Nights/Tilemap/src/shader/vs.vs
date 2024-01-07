// 位置
attribute vec2 a_position;
// 纹理位置
attribute vec2 a_texcoord;
// 获取u_skinSizes的索引
attribute float a_textureid;
// 深度测试
attribute float a_depth;
// 投影矩阵*模型矩阵
uniform mat4 u_modelProjectionMatrix;
// 根据硬件支持的最大纹理批量绘制
uniform vec2 u_skinSizes[SKIN_NUM];

varying vec2 v_texcoord;
varying float v_textureid;

void main() {
    // 转为int
    int textureid = int(a_textureid);
    gl_Position = u_modelProjectionMatrix * vec4(a_position, a_depth, 1.0);
    v_texcoord = a_texcoord / u_skinSizes[textureid];
    v_textureid = a_textureid;
}