/**
 * Created by Administrator on 2017/7/2 0002.
 */
exports.getMime=function(extname){  /*��ȡ��׺���ķ���*/

    switch (extname){

        case '.html':

            return 'text/html';
        case '.css':

            return 'text/css';

        case '.js':

            return 'text/javascript';

        default:
            return 'text/html';
    }

}