/**
 * ALICE Bookkeeping
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 *
 * NOTE: This class is auto generated by OpenAPI-Generator 5.4.0.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/*
 * RunQuality.h
 *
 * Specifies the type of run.
 */

#ifndef ORG_OPENAPITOOLS_CLIENT_MODEL_RunQuality_H_
#define ORG_OPENAPITOOLS_CLIENT_MODEL_RunQuality_H_


#include "ModelBase.h"


namespace org {
namespace openapitools {
namespace client {
namespace model {

class  RunQuality
    : public ModelBase
{
public:
    RunQuality();
    virtual ~RunQuality();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    bool fromJson(const web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    bool fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    enum class eRunQuality
    {
        RunQuality_GOOD,
        RunQuality_BAD,
        RunQuality_TEST,
    };

    eRunQuality getValue() const;
    void setValue(eRunQuality const value);

    protected:
        eRunQuality m_value;
};

}
}
}
}

#endif /* ORG_OPENAPITOOLS_CLIENT_MODEL_RunQuality_H_ */
