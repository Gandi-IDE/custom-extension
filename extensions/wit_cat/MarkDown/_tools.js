function hijack(fn) {
    const _orig = Function.prototype.apply;
    /**
     * Hijack the Function.prototype.apply function.
     * @param thisArg
     * @returns thisArg.
     */
    Function.prototype.apply = function (thisArg) {
        return thisArg;
    };
    const result = fn();
    Function.prototype.apply = _orig;
    return result;
}
export function getVM(runtime) {
    let virtualMachine;

    if (Array.isArray(runtime._events["QUESTION"])) {
        for (const value of runtime._events["QUESTION"]) {
            const v = hijack(value);
            if (v && v.props && v.props.vm) {
                virtualMachine = v.props.vm;
                break;
            }
        }
    } else if (runtime._events["QUESTION"]) {
        const v = hijack(runtime._events["QUESTION"]);
        if (v && v.props && v.props.vm) {
            virtualMachine = v.props.vm;
        }
    }

    if (!virtualMachine) {
        throw new Error(
            "WitCatMarkDowns cannot get Virtual Machine instance.",
        );
    }

    return virtualMachine;
}

const soup_ = '!#%()*+,-./:;=?@[]^_`{|}~' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export function generateUid () {
  const length = 20;
  const soupLength = soup_.length;
  const id = [];
  for (let i = 0; i < length; i++) {
      id[i] = soup_.charAt(Math.random() * soupLength);
  }
  return id.join('');
};
