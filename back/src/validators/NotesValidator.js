const { celebrate,Joi,Segments } = require('celebrate');

module.exports = {
  createValidation() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        note_name: Joi.string().required(),
        content: Joi.string().required()
      })
    });
  },

  updateValidation() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
      })
    });
  },

  readValidation() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
      })
    });
  },

  deleteValidation() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
      })
    });
  },
}